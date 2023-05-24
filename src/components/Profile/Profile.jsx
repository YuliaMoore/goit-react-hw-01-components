import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div class={css.profile}>
      <div class={css.description}>
        <img src={avatar} alt="User avatar" class={css.avatar} />
        <p class={css.name}>{username}</p>
        <p class={css.tag}>{tag}</p>
        <p class={css.location}>{location}</p>
      </div>

      <ul class={css.stats}>
        <li>
          <span class={css.label}>Followers</span>
          <span class={css.quantity}>{followers}</span>
        </li>
        <li>
          <span class={css.label}>Views</span>
          <span class={css.quantity}>{views}</span>
        </li>
        <li>
          <span class={css.label}>Likes</span>
          <span class={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
