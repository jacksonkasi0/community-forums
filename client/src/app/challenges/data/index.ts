export * from './wecoded';

// Add all challenges here
export const challenges = {
  wecoded: () => import('./wecoded').then(mod => mod.wecodedChallenge)
}; 