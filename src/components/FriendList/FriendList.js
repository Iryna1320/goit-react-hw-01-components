import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem.js/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.FriendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
