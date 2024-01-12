import Link from "next/link";

const TourSnapShot = () => {
  return (
    <div className="row y-gap-30 justify-between pt-20">
      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-clock text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Duration:
            <br /> 11h
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-customer text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Group size:
            <br /> 52
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-route text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Near public
            <br /> transportation
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-access-denied text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Free cancellation <br />
            <Link href="/others-pages/help-center" className="text-blue-1 underline">
              Learn more
            </Link>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default TourSnapShot;
