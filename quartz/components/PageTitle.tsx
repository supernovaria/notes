import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const banner = fileData.frontmatter?.banner

  return (
    <div class={classNames(displayClass)}>
      {banner && fileData.slug === "index" && (
        <div class="home-banner">
          <img
            src={banner}
            alt={fileData.frontmatter?.bannerAlt ?? "Home banner"}
          />
        </div>
      )}

      <h2 class="page-title">
        <a href={baseDir}>{title}</a>
      </h2>
    </div>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.home-banner img {
  width: 100%;
  height: 260px;
  object-fit: cover;
  object-position: center;
  display: block;
  margin-bottom: 1.5rem;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
