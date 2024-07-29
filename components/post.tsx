import BlockRendererClient from "./blockRendererClient";

type Props = {
  content: any;
};

export function PostBody({ content }: Props) {
  return (
    <div className="">
      {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      <BlockRendererClient content={content} />
    </div>
  );
}
