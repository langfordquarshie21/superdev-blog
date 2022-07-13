import { tagTabs } from "../../content";
import { styles } from "./styles";
import Link from "next/link";
import { textStyles } from "../styles/text.styles";

const TagTabs = () => {
  return (
    <>
      <div className={styles.tabWrapper}>
        <div className="px-3 max-w-6xl m-auto my-10 mb-3">
          <h3 className={textStyles.h4}>📚 Categories</h3>
        </div>
        <ul className={styles.tabContainer}>
          {tagTabs.map((tag, i) => {
            return (
              <Link
                passHref
                key={i}
                href={`/tag?${tag.toLocaleLowerCase().replace(" ", "-")}`}
              >
                <li className={styles.link}>#{tag}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TagTabs;
