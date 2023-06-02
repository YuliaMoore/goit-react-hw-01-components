import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li class={css.item} id={name}>
      <span class={isOnline ? css.online : css.offline}></span>
      <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p class={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
