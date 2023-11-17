import Nav from "../components/Nav";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Nav />
        <main className="flex-1">{children}</main>
      </div>
    </>
  );
}
