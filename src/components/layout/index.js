import React from "react";
import { SEO, Header, Footer, Rewards } from "..";
import { useTranslation } from "react-i18next";
import { withTrans } from "../../i18n/withTrans";

const LayOut = ({ title, children, desciption, onChangeLanguage }) => {
	const [language, setLanguage] = React.useState("");
	console.log(title, children, desciption, "title, children, description");
	const { t } = useTranslation();

	const handleLanguage = (langValue) => {
		setLanguage(langValue);
        onChangeLanguage(langValue) 

	};

	return (
		<div>
			<SEO title={title} description={desciption} />
			<Header onSelectLanguage={handleLanguage} />
			<div>{children}</div>
			<Footer t={t} />
		</div>
	);
};
export default withTrans(LayOut);
