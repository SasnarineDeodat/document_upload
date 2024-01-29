import "./RightPart.css";

const RightPart = () => {
  return (
    <form className="RightPart-parent">
      <div className="RightPart-child">
        <div className="RightPart-p1">
          <span>Split schedule using social distanting?</span>
          <div>
            <div>
              <input type="radio" value={"Yes"} />
              <span>Yes</span>
            </div>
            <div>
              <input type="radio" value={"No"} />
              <span>No</span>
            </div>
          </div>
        </div>
        <div className="RightPart-p2">
          <span>Location checking:</span>
          <span>All Available!</span>
        </div>
        <div className="RightPart-p3">
          <span>Client:</span>
          <div>
            <div>
              <input type="radio" value={"Single"} />
              <span>Single</span>
            </div>
            <div>
              <input type="radio" value={"Multiple"} />
              <span>Multiple</span>
            </div>
          </div>
          <div>
            <div>
              <span>Testing Center 1</span>
              <div>
                <div>
                  <span>Select Client</span>
                  <img src="./down.png" />
                </div>
                <img src="./clock.png" />
              </div>
            </div>
            <div>
              <span>Testing Center 2</span>
              <div>
                <div>
                  <span>Select Client</span>
                  <img src="./down.png" />
                </div>
                <img src="./clock.png" />
              </div>
            </div>
            <div>
              <span>Testing Center 3</span>
              <div>
                <div>
                  <span>Select Client</span>
                  <img src="./down.png" />
                </div>
                <img src="./clock.png" />
              </div>
            </div>
            <div>
              <span>Testing Center 4</span>
              <div>
                <div>
                  <span>Select Client</span>
                  <img src="./down.png" />
                </div>
                <img src="./clock.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default RightPart;
