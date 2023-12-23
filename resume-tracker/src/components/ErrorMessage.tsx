type props = { msg: string };
function ErrorMessage({ msg }: props) {
  return <p className="text-red-500 font-bold">{msg}</p>;
}

export default ErrorMessage;
