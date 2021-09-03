import { Layout } from "antd";

const Header = () => {
  const { Header } = Layout;
  return (
    <>
      <Header style={{ textAlign: "center" }}>
        <h2 style={{ color: "#fff" }}>Movie List</h2>
      </Header>
    </>
  );
};

export default Header;
