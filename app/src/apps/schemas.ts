interface Pair {
  x: number;
  y: number;
}

export interface BotRequest {
  board: Array<Array<number>>;
  your_pieces: Array<Pair>;
  opponent_pieces:Array <Pair>;
  data: any;
}

export interface BotResponse {
  type: 'PB' | 'MB';
  index: number;
  current: Pair;
  to: Pair;
  build: Pair;
  data: any;
}
