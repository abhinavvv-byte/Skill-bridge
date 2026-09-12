export interface GithubStats {
  publicRepos: number;
  topLanguages: string[];
  commitsThisYear: number;
}

export const fetchGithubStats = async (handle: string): Promise<GithubStats> => {
  // Mocking network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        publicRepos: 24,
        topLanguages: ['TypeScript', 'React', 'Python', 'CSS'],
        commitsThisYear: 452,
      });
    }, 800);
  });
};
