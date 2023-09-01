interface synthesisVoiceModel {
  name: string;
  gender?: string;
  locale?: string;
  mode?: string;
  shortCode?: string;
  voices?: string[];
  voicenames?: string[];
}

export type { synthesisVoiceModel };
