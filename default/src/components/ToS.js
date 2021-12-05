import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import './ToS.css';

const ToS = ({ history }) => {
  return (
    <div className="TosScreen">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css?after"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"
      />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <nav>
        <button
          onClick={() => {
            history.push("/service");
          }}
          className="noboot-btn"
        >⬅</button>
        <span>이용약관</span>
      </nav>

      <div className="TosFrame" >
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="title">제 1장 총칙 &nbsp;</Accordion.Header>
              <Accordion.Body>
                본 약관은 본 서비스를 이용하고자 하는 모든 고객을 대상으로 합니다. 본 약관의 내용은 서비스 화면에 게시하거나 기타의 방법으로
                이용자(ArtROUND 위치기반 서비스 약관에 동의한 자를 말합니다. 이하 '이용자'라고 합니다.)에게 공시하고, 이에 동의한 이용자가 본 서비스에 가입함으로써 효력이 발생합니다.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="title">제 2장 서비스 이용 계약 &nbsp;</Accordion.Header>
              <Accordion.Body>
                이용자가 이용약관에 대한 동의를 누르면 본 약관에 동의하는 것으로 간주되며, 이용계약은 이용자가 동의함과 동시에 성립합니다.
                이용자가 이용약관에 동의하지 않을 경우 서비스의 이용이 제한될 수 있습니다.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>   {/* ToS Frame */}

    </div>  /* screen */
  );
};

export default ToS;


