export type Node = {
  type: string;
  text?: string;
  content?: Node[];
  marks?: { type: string }[];
  attrs?: any;
};

export type TipTapRendererProps = {
  content: {
    type: string;
    content?: Node[];
  };
};
