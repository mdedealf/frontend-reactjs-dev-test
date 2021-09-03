import { List } from "antd";

const ListItem = (data) => {
  const { movieData } = data;
  return (
    <List
      size="large"
      bordered
      dataSource={movieData}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
};

export default ListItem;
