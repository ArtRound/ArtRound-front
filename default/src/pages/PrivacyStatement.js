import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import './PrivacyStatement.css';

const PrivacyStatement = () => {
  return (
    <div className="PrivacyScreen">
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css?after"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"
      />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <div className="fixed_nav"
        style={{
          height: "3vh",
          backgroundColor: "white",
        }}>
        <i className="fas fa-chevron-left"></i>
        <span ><button className="backBtn"><Link to="/">＜</Link></button> &nbsp; &nbsp; 개인정보 취급방침</span>
      </div>

      <div className="PrivacyFrame" >
        <div>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="title">제 1조 (개인정보의 처리목적) &nbsp;</Accordion.Header>
              <Accordion.Body>
                제 1조(개인정보의 처리목적) ArtROUND는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 [개인정보 보호법] 제 18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

                1. 홈페이지 회원 가입 및 관리
                회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별인증, 회원자격 유지 관리, 서비스 부정이용 방지, 만 14세 미만 아동의 개인정보 처리 시 법정 대리인의 동의여부 확인, 각종 고지, 고층처리 목적으로 개인정보를 처리합니다.
                2. 재화 또는 서비스 제공
                물품배송, 서비스 제공, 계약서 발송, 콘텐츠 제공, 맞춤서비스 제공, 본인인증, 연령인증, 요금결제, 채권추심을 목적으로 개인정보를 처리합니다.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <hr />

          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="title">제 2조 (개인정보의 처리 및 보유기간) &nbsp;</Accordion.Header>
              <Accordion.Body>
                1.ArtROUND는 법령에 따른 개인정보 보유, 이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인저보 보유, 기간 내에서 개인정보를 처리, 보유합니다.
                2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.
                1)홈페이지 회원 가입 및 관리 ; 사업자/단체 홈페이지 탈퇴 시까지
                2)재화 또는 서비스 제공 : 재화서비스 공급완료 및 요금결제, 정산 완료시까지
                3)개인정보 처리 업무 : 보유기간
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>   {/* Privacy Frame */}

    </div>  /* screen */
  );
};

export default PrivacyStatement;


