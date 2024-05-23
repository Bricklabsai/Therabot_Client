type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
