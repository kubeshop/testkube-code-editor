// @see {@link https://github.com/kubeshop/testkube-dashboard/blob/a8b25e89/packages/web/src/styles/Colors.ts#L1}
export enum Colors {
  slate50 = '#F8FAFC',
  slate600 = '#475569',
  slate800 = '#1E293B',
  lime400 = '#A3E635',
  indigo400 = '#818CF8',
  amber400 = '#fbbf24',
  rose400 = '#fb7185',
}

// @see {@link https://github.com/kubeshop/testkube-dashboard/blob/a8b25e89/packages/web/src/components/molecules/LogOutput/utils.ts#L3-L11}
export const countLines = (text: string): number => {
  let count = 1;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '\n') {
      count += 1;
    }
  }
  return count;
};
