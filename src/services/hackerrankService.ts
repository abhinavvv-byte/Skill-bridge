export interface HackerRankStats {
  globalRank: number;
  badges: string[];
  certifications: string[];
}

export const fetchHackerRankStats = async (handle: string): Promise<HackerRankStats> => {
  // Mocking network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        globalRank: 15430,
        badges: ['Problem Solving (Gold)', '30 Days of Code', 'Python (Silver)'],
        certifications: ['React (Basic)', 'Problem Solving (Basic)'],
      });
    }, 700);
  });
};
