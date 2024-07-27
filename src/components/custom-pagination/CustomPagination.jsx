import { Pagination } from "antd";

export const CustomPagination = ({ total }) => {
  return (
    <Pagination total={total} showSizeChanger showQuickJumper showTotal={total => `Showing 1 to 10 of 13 entries`} />
  );
};
