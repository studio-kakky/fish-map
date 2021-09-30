export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}): JSX.Element {
  return (
    <>
      <div className='w-full font-sans'>{children}</div>
    </>
  );
}
