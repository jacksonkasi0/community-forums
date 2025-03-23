export * from './wecoded';
export * from './kendoreact';
export * from './future-writing';

// Add all challenges here
export const challenges = {
  wecoded: () => import('./wecoded').then(mod => mod.wecodedChallenge),
  kendoreact: () => import('./kendoreact').then(mod => mod.kendoReactChallenge),
  'future-writing': () => import('./future-writing').then(mod => mod.futureWritingChallenge)
}; 