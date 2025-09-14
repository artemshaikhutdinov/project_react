import styles from "./ProfileCard.module.css";

interface Props {
  avatar: string;
  name: string;
  description: string;
}

function ProfileCard(props: Props) {
  const { avatar } = props;
  const { name } = props;
  const { description } = props;
  return (
    <div className={styles.container}>
      <img src={avatar} alt="User avatar" />
      <h2 className={styles.name}>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;
