import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ description, lang, meta, title }) => {

    const metaDescription = description 
    const uniTitle = 'SafariSwap'

    console.log(description, "helleasdhjksadghaskjdgaskjhd");
    return (
			<Helmet>
				<html lang={lang} />
				<title>{title}</title>
				<meta
					name='google-site-verification'
					content='Z1MhI-jlULwTbPnyNZwWdKX2PPjWAHqUvhhyX5oy9Ss'
				/>
				<meta name='description' content={description} />
				<meta name='title' content={title} />
				<meta name='description' content={metaDescription} />
				<meta name='keywords' content={title}></meta>
				<meta property='og:title' content={uniTitle} />
				<meta property='og:description' content={metaDescription} />
			</Helmet>
		);
}

export default SEO