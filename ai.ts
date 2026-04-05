import { MEDICAL_DATABASE, type MedicalCondition } from './medicalData';

export interface AIAnalysisResult {
  condition: MedicalCondition;
  confidence: number;
  matchedSymptoms: string[];
  severity: "low" | "moderate" | "high";
}

export interface SeverityAssessment {
  level: "LOW" | "MODERATE" | "HIGH";
  color: "green" | "yellow" | "red";
  description: string;
}

// AI Logic: Rule-based symptom analysis
export function analyzeSymptoms(userInput: string): AIAnalysisResult[] {
  // 1. Tokenize input
  const tokens = userInput.toLowerCase()
    .replace(/[^\w\s]/g, '') // remove punctuation
    .split(/\s+/) // split by whitespace
    .filter(t => t.length > 2); // filter out short words

  const matches: AIAnalysisResult[] = [];

  MEDICAL_DATABASE.forEach(condition => {
    let score = 0;
    let matchedSymptoms: string[] = [];
    
    // 2. Pattern Matching against database
    condition.symptoms.forEach(symptom => {
      const symptomWords = symptom.toLowerCase().split(' ');
      
      // Check if ANY significant word from the symptom exists in tokens
      // This is a simplified fuzzy match. E.g. "head pain" matches "headache" if configured, 
      // but here we match "fever" in "high fever"
      const isMatch = symptomWords.some(word => 
        word.length > 3 && tokens.some(token => token.includes(word) || word.includes(token))
      );

      if (isMatch) {
        score += 1;
        matchedSymptoms.push(symptom);
      }
    });

    // 3. Confidence Calculation
    if (score > 0) {
      // Base confidence matches ratio of symptoms found
      let confidence = (score / Math.max(tokens.length * 0.5, condition.symptoms.length)) * 100;
      
      // Cap at 95% (nothing is 100% certain in AI)
      confidence = Math.min(confidence, 95);
      
      // Boost for key distinctive symptoms (naive implementation)
      if (matchedSymptoms.length >= 2) confidence += 10;

      matches.push({
        condition,
        confidence: Math.round(confidence),
        matchedSymptoms,
        severity: condition.severity
      });
    }
  });

  // Sort by confidence descending
  return matches.sort((a, b) => b.confidence - a.confidence).slice(0, 3);
}

// Assess overall severity based on findings
export function assessSeverity(matches: AIAnalysisResult[]): SeverityAssessment {
  if (matches.length === 0) {
    return { level: "LOW", color: "green", description: "No specific conditions matched." };
  }

  const highestSeverityMatch = matches.find(m => m.condition.severity === "high");
  if (highestSeverityMatch) {
    return { level: "HIGH", color: "red", description: "Potentially serious condition detected." };
  }

  const moderateSeverityMatch = matches.find(m => m.condition.severity === "moderate");
  if (moderateSeverityMatch) {
    return { level: "MODERATE", color: "yellow", description: "Monitor symptoms closely." };
  }

  return { level: "LOW", color: "green", description: "Likely mild condition." };
}
