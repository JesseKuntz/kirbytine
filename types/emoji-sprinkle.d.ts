interface Window {
  EmojiSprinkle: {
    sprinkleEmojis({
      emoji,
      fontSize,
      count,
      fade,
    }: {
      emoji?: string;
      fontSize?: number;
      count?: number;
      fade?: number;
    }): void;
  };
}
