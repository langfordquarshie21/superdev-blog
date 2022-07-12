import { tagTabs } from "../../content";
import { styles } from "./styles";
import Link from "next/link";

const TagTabs = () => {
  return (
    <>
      <div className={styles.tabWrapper}>
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
