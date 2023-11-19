import { Form } from 'react-router-dom';
import './Pagination.scss';

interface Props {
  count: number;
}

export const Pagination = ({ count }: Props) => {
  const url = new URL(location.href);
  const currentPageNumber = url.searchParams.get('page') || 1;

  const getPagesNumber = (count: number) => {
    const arr: number[] = [];

    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }

    return arr;
  };
  return (
    <Form className="pagination">
      {getPagesNumber(count).map((item, index) => {
        return (
          <input
            type="submit"
            key={index}
            value={item}
            name="page"
            disabled={+currentPageNumber === item}
          />
        );
      })}
    </Form>
  );
};
