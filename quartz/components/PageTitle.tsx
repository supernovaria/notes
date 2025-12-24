import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const banner = fileData.frontmatter?.banner
  const bannerAlt = fileData.frontmatter?.bannerAlt ?? "Home banner"

  return (
    <>
      {fileData.slug === "index" && banner && (
        <div className="home-banner-wrapper">
          <img src={banner} alt={bannerAlt} />
        </div>
      )}
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
    </>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

/* Full-width homepage banner */
.home-banner-wrapper img {
  width: 100%;
  max-height: 300px; /* adjust as needed */
  object-fit: cover;
  object-position: center;
  display: block;
  margin-bottom: 2rem;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
