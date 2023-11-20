import styled from "styled-components";

type LayoutProps = {
  children: React.ReactNode;
};

const StyledLayoutDiv = styled.div`
  display: flex;
  flex-direction: row;

  .space-left {
    width: 15%;
  }

  .content-container {
    width: 70%;
  }

  .space-right {
    width: 15%;
  }

  @media (max-width: 600px) {
    .space-left {
      width: 0;
    }

    .content-container {
      width: 100%;
    }

    .space-right {
      width: 0;
    }
  }
`;

export default function ContentLayout({ children }: LayoutProps) {
  return (
    <StyledLayoutDiv>
      <div className="space-left"></div>
      <div className="content-container">{children}</div>
      <div className="space-right"></div>
    </StyledLayoutDiv>
  );
}
