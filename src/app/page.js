import styles from "./page.module.css";
import "./page.module.css";
import InfoBar from "./components/infoBar/infoBar.js";
import AnimatedText from "./components/animatedtext/animatedText.js";
import ImageFileButton from "./components/upload-button/upload_button";
import LoadingWidget from "./components/loadingWidget/loadingWidget";
export default function Home() {

  return (
    <main className={styles.main}>

      <AnimatedText />
      <div className={styles.main_screen_content}>
        <InfoBar />
        <ImageFileButton />
      </div>
    </main>

  );
}
