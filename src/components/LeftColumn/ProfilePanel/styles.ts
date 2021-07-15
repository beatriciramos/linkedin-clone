import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 12px;
  .profile-cover {
    width: 100%;
    height: 54px;
    background: #283e4a;
  }
  .profile-picture {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: inset 0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15)),
      0 1.5px 3px 0 var(--black-a15, rgba(0, 0, 0, 0.15));
    display: flex;
    margin: -38px auto 12px;
  }
  h1 {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    color: #000;
  }
  h2 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);
  }
  .separator {
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    margin: 16px 0 12px;
  }
  .key-value {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    margin: 0 12px;
    font-weight: 600;
    .key {
      color: rgba(0, 0, 0, 0.6);
    }
    .value {
      color: #0073b1;
    }
  }
`;
