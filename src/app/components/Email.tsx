import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
  businessEnglish: boolean;
  generalEnglish: boolean;
  examPreparation: boolean;
  editingYourResearchPaper: boolean;
  conversationalEnglish: boolean;
}

const baseUrl = "http://localhost:3000/";

export const EmailTemplate = ({
  firstName,
  lastName,
  phone,
  email,
  message,
  businessEnglish,
  generalEnglish,
  examPreparation,
  editingYourResearchPaper,
  conversationalEnglish,
}: EmailTemplateProps) => (
  <Html>
    <Head />
    <Preview>There is a new message from a website client!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={"/rocket_launch_FILL0_wght400_GRAD0_opsz24.svg"}
          width="170"
          height="50"
          alt="rocket_logo"
          style={logo}
        />
        <Text style={paragraph}>
          This is the message from {firstName} {lastName},
        </Text>
        <Text style={paragraph}>He sent this message: {message}</Text>
        <Text style={paragraph}>His phone number: {phone}</Text>
        <Text style={paragraph}>His email: {email}</Text>
        <Text style={paragraph}>
          He is interested in the following services:
          <ul>
            {businessEnglish && <li>Business English</li>}
            {generalEnglish && <li>General English</li>}
            {examPreparation && <li>Exam Preparation</li>}
            {editingYourResearchPaper && <li>Editing Your Research Paper</li>}
            {conversationalEnglish && <li>Conversational English</li>}
          </ul>
        </Text>
        <Text style={paragraph}>
          Best,
          <br />
          The Ligtning English with Michael
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

EmailTemplate.PreviewProps = {
  firstName: "Yarema",
} as EmailTemplateProps;

export default EmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
