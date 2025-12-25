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
    <div class="page-title-wrapper">
      {fileData.slug === "index" && banner && (
        <div class="home-banner-wrapper">
          <img src={banner} alt={bannerAlt} />
        </div>
      )}

      {/* This MUST stay intact so Quartz keeps toggles aligned */}
      <h2 class={classNames(displayClass, "page-title")}>
        <a href={baseDir}>{title}</a>
      </h2>
    </div>
  )
}

PageTitle.css = `
.page-title-wrapper {
  display: flex;
  flex-direction: column;
}

.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

/* Full-width homepage banner */
.home-banner-wrapper img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin-bottom: 1.5rem;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
