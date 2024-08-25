import ArticleImage from "../../../assets/Images/Article.png"
import styles from './Article.module.css'

const Article = () => {
  return (
    <div className={styles.articles}>
      <h2>Articles on Kyrgyzstan</h2>
      <div className={styles.articlesWrapper}>
        <div className={styles.articleCard}>
          <img src={ArticleImage} alt="Article"/>
          <span>Kyrgyzstan</span>
          <p>Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque
            natural places as Kyrgyzstan...</p>
          <button>Read more</button>
        </div>
        <div className={styles.articleCard}>
          <img src={ArticleImage} alt="Article"/>
          <span>Kyrgyzstan</span>
          <p>Perhaps none of the Central Asian travel destinations can boast with such abundance of picturesque
            natural places as Kyrgyzstan...</p>
          <button>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Article;