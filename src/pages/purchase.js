import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box, Hr, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"purchase"} />
		<Helmet>
			<title>
				Pricing
			</title>
			<meta name={"description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:title"} content={"StaffCop Enterprise"} />
			<meta property={"og:description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2020-11-28T11:58:11.223Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/fav.svg?v=2021-02-25T00:02:20.144Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.Header />
		<Section padding="120px 0 40px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)" md-padding="100px 0 40px 0" sm-padding="80px 0 40px 0">
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="100%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						justify-content="flex-start"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
					/>
					{"        "}
					<Text
						font="normal 700 48px/58px --fontFamily-googleInter"
						margin="0px 0px 36px 5px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 34px/30px Inter, sans-serif"
					>
						Purchase
					</Text>
					<Components.Calculator
						width="75%"
						display="flex"
						align-items="flex-start"
						justify-content="flex-start"
						nout-width="100%"
						border-radius="6px"
					/>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override
				slot="SectionContent"
				max-width="1170px"
				align-items="center"
				lg-overflow-x="scroll"
				lg-align-items="flex-start"
			/>
			<Box display="flex" width="100%" flex-direction="column" lg-width="1200px">
				<Box width="100%" display="flex">
					<StackItem width="20%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 10px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							Users to track
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							5-25
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							26-50
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							51-100
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							101-150
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							151-250
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							251-500
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							501-1000
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 600 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 700 20px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							1001+
						</Text>
						{"    "}
					</StackItem>
				</Box>
				<Hr width="100%" margin="24px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
				<Box width="100%" display="flex">
					<StackItem width="20%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 10px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							Perpetual{" "}
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 98
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 91
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 87
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 81
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 78
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 75
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 72
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 69
						</Text>
						{"    "}
					</StackItem>
				</Box>
				<Hr width="100%" margin="24px 0px 0px 0px" border-color="rgba(237, 237, 237, 1)" padding="0px 0px 0px 0px" />
				<Box width="100%" display="flex" background="#F9F9F9" padding="24px 0px 24px 0px">
					<StackItem width="20%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 10px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							12-months{" "}
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 70
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 65
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 62
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 57
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 56
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 53
							<br />
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 51
							<br />
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 49
						</Text>
						{"    "}
					</StackItem>
				</Box>
				<Hr width="100%" margin="0px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
				<Box width="100%" display="flex">
					<StackItem width="20%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 10px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							3-months{" "}
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 35
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 33
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 31
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 29
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 28
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 27
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 26
						</Text>
						{"    "}
					</StackItem>
					<StackItem width="10%" display="flex" sm-width="100%" nout-width="100%">
						<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
						{"        "}
						<Text
							font="normal 400 18px/160% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							display="inline-block"
							color="#555555"
							letter-spacing="-1%"
							md-font="normal 400 16px/40px Inter, sans-serif"
							sm-text-align="center"
						>
							$ 25
						</Text>
						{"    "}
					</StackItem>
				</Box>
				<Hr width="100%" margin="24px 0px 20px 0px" border-color="rgba(237, 237, 237, 1)" />
			</Box>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Form />
			<Components.Footer>
				<Override slot="text">
					Russia, Novosibirsk, Koptug Road 4, Sobolev Institute of Mathematics
				</Override>
			</Components.Footer>
		</Section>
		<Section
			background="#ffffff"
			padding="30px 0 30px 0"
			border-width="1px 0px 0px 0px"
			border-style="solid"
			border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
		>
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="53%" display="flex" lg-width="85%">
					{"        "}
					<Text
						font="normal 400 15px/24px --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#999999"
						md-font="normal 400 13px/22px --fontFamily-googleInter"
						sm-font="normal 400 12px/17px --fontFamily-googleInter"
					>
						?? Atom Security LLC, 2001???2020. All rights reserved. All trademarks are the property of their respective owners.{"\n\n\n\n\n        "}
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="47%" display="flex" lg-width="15%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" md-justify-content="center" />
					{"        "}
					<Link
						id="gobot"
						href="#shapka"
						color="--primary"
						text-decoration-line="initial"
						padding="0px 0px 0px 0px"
						target="_blank"
						font="normal 600 25px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						display="flex"
						lg-font="normal 400 24px/1.5 --fontFamily-sans"
						sm-width="auto"
						sm-text-align="center"
						border-radius="40px"
						text-align="center"
						transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
						hover-box-shadow="0 10px 10px -6px rgba(0,0,0,.24)"
						hover-transform="translateY(-2px)"
						cursor="pointer"
						align-items="center"
						border-width="2px"
						border-style="solid"
						border-color="--color-primary"
						md-padding="0px 0px 0px 0px"
					>
						<Image width="18px" height="18px" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/Icon.svg?v=2020-10-21T00:34:26.772Z" padding="12px 13px 14px 13px" />
					</Link>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"602ae6625a167a1bb9dbc787"}>
				{"section#shapka {\n    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n    animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n}\n.wrap-calc {\n    border-radius: 6px;\n}\na.menu-trigger:hover {\n    color: #1465FF;\n}\n.munecontainer a:hover {\n    text-decoration: underline;\n}\n.munecontainer li { \npadding: 5px; \nfont: normal 600 14px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);\ntext-align: center !important;\n}\n.munecontainer a {\ncolor: rgba(19, 33, 42, 1);\nfont: 400 18px/28px var(--qtheme-fontFamily-googleInter);\ntext-align: center !important;\n}\na.menu-trigger {\n    padding: 33px 15px 30px 15px;\n}\n.munecontainer ul {\n    background: #ffffff;\n    list-style: none;\n    padding-inline-start: 0px;\n    padding: 10px;\n    width: 220px;\n    text-align: center;\n    position: relative;\n    top: -16px;\n    z-index: 9;\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n}\ntd:nth-child(1) {\n    font-weight: 600;\n}\nnav {\n    position: relative;\n}\nnav a {\n    display: flex;\n    text-decoration: none;\n        font: var(--qtheme-font-menu);\n    color: #020202;\n}\n.munecontainer {\n    position: absolute;\n}\nli:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n}\n.munecontainer a:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n    text-decoration: none;\n}  \n.menuopen[data-display=\"block\"] {\n  -webkit-transform: scaleY(1);\n  -moz-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  opacity: 1;\n  pointer-events: all;\n}\n\n.menuopen[data-display=\"none\"] {\n    z-index: 1 !important;\n    -webkit-transition-duration: 0.3s;\n    -moz-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    opacity: 0;\n    -webkit-transform: scaleY(0);\n    transform: scaleY(0);\n    -webkit-transform-origin: 100% 0%;\n    transform-origin: 100% 0%;\n    display: block;\n    margin-top: -20px;\n}\n\n.munecontainer ul {\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n\na.menu-trigger:hover~.munecontainer {\n  pointer-events: all;\n}\n\n.munecontainer {\n  pointer-events: none;\n}"}
			</style>
			<script src={"https://www.googletagmanager.com/gtag/js?id=UA-6450776-3"} async={true} place={"endOfHead"} rawKey={"60a792403e90c37fb8c52e96"}>
				{"  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-6450776-3');"}
			</script>
		</RawHtml>
	</Theme>;
});