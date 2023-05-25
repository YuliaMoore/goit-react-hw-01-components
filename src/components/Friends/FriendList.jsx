import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul class={css.friendList}>
      {friends.map(({ avatar, name, isOnline }) => {
        return (
          <li class={css.item} id={name}>
            <span class={isOnline ? css.online : css.offline}></span>
            <img class={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p class={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.prototype = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
    })
  ),
};
