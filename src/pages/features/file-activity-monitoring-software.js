import React from "react";
import theme from "theme";
import { Theme, Text, Icon, Box, Link, Image, Section, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { BsFillCircleFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"features/file-activity-monitoring-software"} />
		<Helmet>
			<title>
				File Activity Monitoring Software
			</title>
			<meta name={"description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:title"} content={"StaffCop Enterprise"} />
			<meta property={"og:description"} content={"StaffCop provides a unique, fully integrated solution that focuses on detection and response to insider threats through a combination of advanced behavioral analysis and context-rich logging of insider activity.\n\n"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/gfjkjkljkl.nbmbv.png?v=2020-11-04T15:35:13.162Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/favicon-32x32.png?v=2023-08-25T09:35:09.985Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-23T12:52:41.903Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/android-chrome-512x512.png?v=2023-08-25T04:37:47.288Z"} />
			<meta name={"msapplication-TileColor"} content={"#1465FF"} />
		</Helmet>
		<Components.Header />
		<Section
			padding="200px 0 120px 0"
			background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -896px/3610px no-repeat,linear-gradient(180deg,#F5F5F5 21.6%,rgba(251, 251, 251, 0.21) 100%)"
			lg-padding="100px 0 30px 0"
			md-padding="100px 0 0px 0"
			sm-padding="80px 0 0px 0"
		>
			<Override slot="SectionContent" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					sm-align-items="center"
					sm-width="100%"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						justify-content="center"
						align-items="flex-start"
						sm-align-items="center"
						lg-align-items="center"
						flex-direction="column"
					/>
					{"        "}
					<Text
						font="--headline2"
						margin="0px 0px 16px 0px"
						display="inline-block"
						md-font="normal 700 30px/40px Inter, sans-serif"
						lg-text-align="center"
					>
						File Activity Monitoring Software{"\n\n"}
					</Text>
					<Box align-items="center" margin="0px 0px 0px 0px" display="flex">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/22px --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Alert or prevent any upload to the cloud
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
						/>
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" color="#555" font="400 18px/22px --fontFamily-googleInter">
							Monitor files on a local drive or network shares
						</Text>
					</Box>
					<Box display="flex" align-items="center">
						<Icon
							category="bs"
							icon={BsFillCircleFill}
							size="10px"
							color="rgba(20, 101, 255, 1)"
							box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						/>
						<Text margin="9px 0px 9px 18px" color="#555" font="400 18px/22px --fontFamily-googleInter" sm-font="400 16px/22px --fontFamily-googleInter">
							Implement removable storage policy
						</Text>
					</Box>
					{"    "}
					<Link
						box-shadow="inset 0px 5px 17px rgba(255, 255, 255, 0.23)"
						md-padding="16px 26px 16px 26px"
						hover-background="#409EEB"
						sm-font="600 16px/22px --fontFamily-googleInter"
						padding="16px 38px 16px 38px"
						border-radius="40px"
						background="--color-primary"
						border-image="linear-gradient(353.68deg, rgba(255, 255, 255, 0) -0.12%, rgba(255, 255, 255, 0.04) 56.34%)  3 / 1 / 0 stretch"
						text-decoration-line="initial"
						border-width="1px"
						margin="36px 0px 0px 0px"
						sm-padding="16px 20px 16px 20px"
						position="relative"
						z-index="2"
						color="#ffffff"
						font="600 18px/22px --fontFamily-googleInter"
						href="/demo-request"
						border-style="solid"
						transition="-webkit-transition: all .3s;  transition: all .3s"
					>
						Request demo
					</Link>
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" sm-width="100%" lg-width="100%">
					<Override slot="StackItemContent" lg-align-items="center" lg-justify-content="center" position="relative" />
					{"        "}
					<Image
						position="absolute"
						sm-position="relative"
						sm-top="0px"
						sm-right="auto"
						right="-115px"
						md-right="-70px"
						sm-left="auto"
						bottom="auto"
						lg-top="-35px"
						md-top="0px"
						sm-bottom="auto"
						width="803px"
						src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15:07:09.010Z"
						left="auto"
						lg-position="static"
						lg-right="-50px"
						md-width="400px"
						top="-55px"
						lg-width="500px"
						srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/aasdsadasdasd.png?v=2020-10-19T15%3A07%3A09.010Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw"
					/>
					{"    "}
				</StackItem>
			</Stack>
		</Section>
		<Components.EmbedHTML />
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" align-items="center" max-width="1200px" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="100%" display="flex" sm-width="100%" nout-width="100%">
					{"        "}
					<Text
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
					>
						<Strong>
							File operations
						</Strong>
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text margin="9px 0px 9px 18px" font="400 18px/22px --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter">
							StaffCop track all file operations with the ability to get a report based on a particular file operation type performed in a particular application. For example, we can gert a list of all files that were opened in MS Word or all files created in Notepad. This can be useful in case we have to monitor any sensitive data that is processed in a specific application.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/62.png?v=2021-02-01T11:27:44.894Z" max-width="100%" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/62.png?v=2021-02-01T11%3A27%3A44.894Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/62.png?v=2021-02-01T11%3A27%3A44.894Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/62.png?v=2021-02-01T11%3A27%3A44.894Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/62.png?v=2021-02-01T11%3A27%3A44.894Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/62.png?v=2021-02-01T11%3A27%3A44.894Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/62.png?v=2021-02-01T11%3A27%3A44.894Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/62.png?v=2021-02-01T11%3A27%3A44.894Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="24px 0 24px 0" background="#FFFFFF">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack width="100%" gap="--cmp-stack-gap-default" margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" sm-width="100%" nout-width="100%">
					{"        "}
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{"\n"}
							<Strong>
								Files sent/received by e-mail or messengers
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem sm-width="100%" md-width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text font="400 18px/22px --fontFamily-googleInter" color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px">
							With StaffCop you can get the list of files sent/received in instant messengers or by e-mail. Files can be downloaded for further investigation.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/64.png?v=2021-02-01T11:34:46.529Z" max-width="100%" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/64.png?v=2021-02-01T11%3A34%3A46.529Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/64.png?v=2021-02-01T11%3A34%3A46.529Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/64.png?v=2021-02-01T11%3A34%3A46.529Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/64.png?v=2021-02-01T11%3A34%3A46.529Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/64.png?v=2021-02-01T11%3A34%3A46.529Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/64.png?v=2021-02-01T11%3A34%3A46.529Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/64.png?v=2021-02-01T11%3A34%3A46.529Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Image max-width="100%" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/63.png?v=2021-02-01T11:35:18.854Z" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/63.png?v=2021-02-01T11%3A35%3A18.854Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/63.png?v=2021-02-01T11%3A35%3A18.854Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/63.png?v=2021-02-01T11%3A35%3A18.854Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/63.png?v=2021-02-01T11%3A35%3A18.854Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/63.png?v=2021-02-01T11%3A35%3A18.854Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/63.png?v=2021-02-01T11%3A35%3A18.854Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/63.png?v=2021-02-01T11%3A35%3A18.854Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem width="100%" display="flex" sm-width="100%" nout-width="100%">
					{"        "}
					<Text
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
					>
						<Strong>
							Files copied from/to USB drives
						</Strong>
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/22px --fontFamily-googleInter">
							You can get reports on all the files that were copied from/to USB devices. You can download the file for further ivestigation if it was shadow-copied. Moreover, you can shadow-copy ALL the files on a connected USB drive, if this option is enabled.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem sm-width="100%" md-width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/112.png?v=2021-02-01T11:46:51.859Z" max-width="100%" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/112.png?v=2021-02-01T11%3A46%3A51.859Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/112.png?v=2021-02-01T11%3A46%3A51.859Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/112.png?v=2021-02-01T11%3A46%3A51.859Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/112.png?v=2021-02-01T11%3A46%3A51.859Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/112.png?v=2021-02-01T11%3A46%3A51.859Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/112.png?v=2021-02-01T11%3A46%3A51.859Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/112.png?v=2021-02-01T11%3A46%3A51.859Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" />
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem nout-width="100%" width="100%" display="flex" sm-width="100%">
					{"        "}
					<Text
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
						margin="0px 0px 0px 0px"
						display="inline-block"
					>
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							{"\n"}
							<Strong>
								Documents sent to print
							</Strong>
							{"\n\n"}
						</Strong>
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem md-width="100%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text color="#555" sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/22px --fontFamily-googleInter">
							StaffCop will show you what documents were sent to print. The info includes the name of the printers, a preview of the file and the copy of file itself (in case shadow-copying option was enabled). You can download the file for further investigation.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/65.png?v=2021-02-01T11:59:44.703Z" max-width="100%" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/65.png?v=2021-02-01T11%3A59%3A44.703Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/65.png?v=2021-02-01T11%3A59%3A44.703Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/65.png?v=2021-02-01T11%3A59%3A44.703Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/65.png?v=2021-02-01T11%3A59%3A44.703Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/65.png?v=2021-02-01T11%3A59%3A44.703Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/65.png?v=2021-02-01T11%3A59%3A44.703Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/65.png?v=2021-02-01T11%3A59%3A44.703Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex" />
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#FFFFFF" padding="24px 0 24px 0">
			<Override slot="SectionContent" max-width="1200px" align-items="center" />
			<Stack margin="0px 0px 0px 0px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem sm-width="100%" nout-width="100%" width="100%" display="flex">
					{"        "}
					<Text
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="rgba(19, 33, 42, 1)"
						letter-spacing="-1%"
						md-font="normal 700 30px/40px Inter, sans-serif"
						sm-text-align="center"
						sm-font="normal 700 24px/30px Inter, sans-serif"
						font="normal 700 32px/140% --fontFamily-googleInter"
					>
						<Strong>
							OCR (Text recognition in PDF and images)
						</Strong>
						{"\n\n"}
					</Text>
					{"    "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Text sm-font="400 16px/22px --fontFamily-googleInter" margin="9px 0px 9px 18px" font="400 18px/22px --fontFamily-googleInter" color="#555">
							StaffCop has OCR module for extracting text from images and PDF documents. It has 2 options: embedded OCR (English, Russian and Kazakh languages) and usage of existing ABBYY accounts. The file types in which text is recognized can be specified.
							<br />
							{"\n\n"}
						</Text>
					</Box>
					{"            "}
				</StackItem>
				<StackItem display="flex" sm-width="100%" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Box display="flex">
						<Image src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/66.png?v=2021-02-01T12:09:02.005Z" max-width="100%" srcSet="https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/66.png?v=2021-02-01T12%3A09%3A02.005Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/66.png?v=2021-02-01T12%3A09%3A02.005Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/66.png?v=2021-02-01T12%3A09%3A02.005Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/66.png?v=2021-02-01T12%3A09%3A02.005Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/66.png?v=2021-02-01T12%3A09%3A02.005Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/66.png?v=2021-02-01T12%3A09%3A02.005Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/5f844e532e3a2a001faf55b8/images/66.png?v=2021-02-01T12%3A09%3A02.005Z&quality=85&w=3200 3200w" sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,(max-width: 1066px) 100vw,(max-width: 1560px) 100vw,100vw" />
					</Box>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 0px 0" background="url(https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/head-13.svg?v=2020-10-20T19:28:03.243Z) center -346px/3610px no-repeat">
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Components.Form />
			<Components.Footer>
				<Override slot="text" />
			</Components.Footer>
		</Section>
		<Components.Copyright />
		<RawHtml>
			<style place={"endOfHead"} rawKey={"602ae6625a167a1bb9dbc787"}>
				{"section#shapka {\n    -webkit-animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n    animation: fade-in-top 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;\n}\n.wrap-calc {\n    border-radius: 6px;\n}\na.menu-trigger:hover {\n    color: #1465FF;\n}\n.munecontainer a:hover {\n    text-decoration: underline;\n}\n.munecontainer li { \npadding: 5px; \nfont: normal 600 14px/1.5 var(--qtheme-fontFamily-googleSourceSansPro);\ntext-align: center !important;\n}\n.munecontainer a {\ncolor: rgba(19, 33, 42, 1);\nfont: 400 18px/28px var(--qtheme-fontFamily-googleInter);\ntext-align: center !important;\n}\na.menu-trigger {\n    padding: 33px 15px 30px 15px;\n}\n.munecontainer ul {\n    background: #ffffff;\n    list-style: none;\n    padding-inline-start: 0px;\n    padding: 10px;\n    width: 220px;\n    text-align: center;\n    position: relative;\n    top: -16px;\n    z-index: 9;\n    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.06), 0px 0px 1px rgba(0, 0, 0, 0.14);\n    border-radius: 6px;\n}\ntd:nth-child(1) {\n    font-weight: 600;\n}\nnav {\n    position: relative;\n}\nnav a {\n    display: flex;\n    text-decoration: none;\n        font: var(--qtheme-font-menu);\n    color: #020202;\n}\n.munecontainer {\n    position: absolute;\n}\nli:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n}\n.munecontainer a:hover {\n    background: #FAFAFA;\n    color: rgb(23, 103, 255);\n    text-decoration: none;\n}  \n.menuopen[data-display=\"block\"] {\n  -webkit-transform: scaleY(1);\n  -moz-transform: scaleY(1);\n  transform: scaleY(1);\n  -webkit-transition-duration: 0.3s;\n  -moz-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n  -webkit-transform-origin: 100% 0%;\n  transform-origin: 100% 0%;\n  opacity: 1;\n  pointer-events: all;\n}\n\n.menuopen[data-display=\"none\"] {\n    z-index: 1 !important;\n    -webkit-transition-duration: 0.3s;\n    -moz-transition-duration: 0.3s;\n    transition-duration: 0.3s;\n    opacity: 0;\n    -webkit-transform: scaleY(0);\n    transform: scaleY(0);\n    -webkit-transform-origin: 100% 0%;\n    transform-origin: 100% 0%;\n    display: block;\n    margin-top: -20px;\n}\n\n.munecontainer ul {\n  border-top-left-radius: 0px !important;\n  border-top-right-radius: 0px !important;\n}\n\na.menu-trigger:hover~.munecontainer {\n  pointer-events: all;\n}\n\n.munecontainer {\n  pointer-events: none;\n}"}
			</style>
			<script src={"https://www.googletagmanager.com/gtag/js?id=UA-6450776-3"} async={true} place={"endOfHead"} rawKey={"60a792403e90c37fb8c52e96"}>
				{"  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'UA-6450776-3');"}
			</script>
			<script async={false} type={"text/javascript"} place={"endOfBody"} rawKey={"6397fad8cf33eb1c42d97b3d"}>
				{"   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n   m[i].l=1*new Date();\n   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}\n   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n   (window, document, \"script\", \"https://mc.yandex.ru/metrika/tag.js\", \"ym\");\n\n   ym(91528209, \"init\", {\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true,\n        webvisor:true\n   });"}
			</script>
			<script place={"endOfHead"} rawKey={"653603dcbd92e939253b49cb"}>
				{"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','GTM-52GMWJV');"}
			</script>
		</RawHtml>
	</Theme>;
});