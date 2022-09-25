import "./castslider.css";
import LazyLoad from "react-lazyload";

const CastSlider = ({ cast }) => {
	return (
		<div className="castSlider">
			{cast?.map((member) => (
				<div className="castSlide" key={member.id}>
					<LazyLoad>
						<div className="castSlide__image">
							<img
								src={
									member.profile_path
										? `https://image.tmdb.org/t/p/w500${member.profile_path}`
										: "https://via.placeholder.com/150/CCCCCC/808080/?Text=No_image"
								}
								alt=""
								loading="lazy"
							/>
						</div>
					</LazyLoad>
					<p>{member.name}</p>
				</div>
			))}
		</div>
	);
};

export default CastSlider;
