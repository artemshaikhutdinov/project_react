interface Props {
  age: number;
}

function AgeInfo(props: Props) {
  const { age } = props;
  return (
    <div>
      <p>I'm {age} years old</p>
    </div>
  );
}

export default AgeInfo;
