import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import { TwitterIcon } from '../utils';

const StyledTwitterBox = styled.div`
  /* background: linear-gradient(to right, transparent, hsl(203, 89%, 83%)); */
  background-color: hsl(203, 89%, 91%);
  padding: var(--gap40);
  margin-top: var(--gap90);
  margin-bottom: var(--gap110);
  position: relative;
  overflow: hidden;
  svg {
    position: absolute;
    width: var(--gap100);
    height: var(--gap100);
    top: 0;
    right: 0;
    .primary {
      fill: hsl(203, 89%, 53%);
    }
    .secondary {
      fill: none;
    }
  }
  p {
    width: 90%;
    position: relative;
    margin: 0;
    a {
      color: hsl(203, 99%, 23%);
      &:hover {
        color: hsl(203, 89%, 53%);
      }
    }
  }
`;

function TwitterBox({ twitter }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  return (
    <StyledTwitterBox className="twitter">
      {TwitterIcon}
      {twitter ? (
        <p>
          No hay sección de comentarios, pero ya estamos hablando sobre este
          tema en{' '}
          <a href={twitter} rel="noopener noreferrer" target="_blank">
            Twitter
          </a>
          : acércate y cuéntanos tu opinión!
        </p>
      ) : (
        <p>
          No hay sección de comentarios, pero me encantaría escuchar tu opinión:
          escríbeme en{' '}
          <a
            href={`https://www.twitter.com/${data.site.siteMetadata.author}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            Twitter
          </a>
          !
        </p>
      )}
    </StyledTwitterBox>
  );
}

TwitterBox.propTypes = {
  twitter: PropTypes.string,
};

export default TwitterBox;
