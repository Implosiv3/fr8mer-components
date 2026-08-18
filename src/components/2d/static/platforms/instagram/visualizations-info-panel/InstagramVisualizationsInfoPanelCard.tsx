import "./InstagramVisualizationsInfoPanelCard.css";

interface InstagramVisualizationsInfoPanelCardProps {
  title?: string;
  subtitle?: string;
  doShowTrend?: boolean;
}

export function InstagramVisualizationsInfoPanelCard({
  title = "Panel para profesionales",
  subtitle = "826 visualizaciones en los últimos 30 días.",
  doShowTrend = false,
}: InstagramVisualizationsInfoPanelCardProps) {
  return (
    <div className="instagram-info-card">
      <div className="instagram-info-card__title">
        {title}
      </div>

      <div className="instagram-info-card__subtitle">
        {doShowTrend && (
          <span className="instagram-info-card__trend">
            ↗
          </span>
        )}

        <span>{subtitle}</span>
      </div>
    </div>
  );
}