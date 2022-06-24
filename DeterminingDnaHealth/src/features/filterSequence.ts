const filterSequence = <SequenceType>(start: number, end: number, sequence: SequenceType[]): SequenceType[] =>
  sequence.slice(start > 0 ? start : 0, end + 1 < sequence.length ? end + 1 : sequence.length)

export { filterSequence }
