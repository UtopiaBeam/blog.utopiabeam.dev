export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>;
};
