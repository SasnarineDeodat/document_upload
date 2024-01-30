import "./RightPart.css";
import Select from "./Select";

const RightPart = () => {
  return (
    <form className="RightPart-parent">
      <div className="RightPart-child">
        <div className="RightPart-p1">
          <span>Split schedule using social distanting?</span>
          <div className="switchers">
            <div>
              <input type="radio" value={"Yes"} name="split_schedule" />
              <span>Yes</span>
            </div>
            <div>
              <input type="radio" value={"No"} name="split_schedule" />
              <span>No</span>
            </div>
          </div>
        </div>
        <div className="RightPart-p2">
          <h3>Location checking:</h3>
          <span>All Available!</span>
        </div>
        <div className="RightPart-p3" style={{ padding: "15px 0 15px 0" }}>
          <span>Client:</span>
          <div className="switchers2">
            <div>
              <input type="radio" value={"Single"} name="client" />
              <span>Single</span>
            </div>
            <div>
              <input type="radio" value={"Multiple"} name="client" />
              <span>Multiple</span>
            </div>
          </div>
          <div
            className="testers"
            style={{ gap: "15px", display: "flex", flexDirection: "column" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="testers-container"
            >
              <span>Testing Center 1</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  right: "-20px",
                  gap: 10,
                }}
              >
                <div style={{ width: 140 }}>
                  <Select
                    placeholder="Select Client"
                    fields={["Sasnarine", "Bailey"]}
                  />
                </div>
                <img height={25} width={25} src="./clock.png" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="testers-container"
            >
              <span>Testing Center 2</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  right: "-20px",
                  gap: 10,
                }}
              >
                <div style={{ width: 140 }}>
                  <Select
                    placeholder="Select Client"
                    fields={["Sasnarine", "Bailey"]}
                  />
                </div>
                <img height={25} width={25} src="./clock.png" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="testers-container"
            >
              <span>Testing Center 3</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  right: "-20px",
                  gap: 10,
                }}
              >
                <div style={{ width: 140 }}>
                  <Select
                    placeholder="Select Client"
                    fields={["Sasnarine", "Bailey"]}
                  />
                </div>
                <img height={25} width={25} src="./clock.png" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              className="testers-container"
            >
              <span>Testing Center 4</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  right: "-20px",
                  gap: 10,
                }}
              >
                <div style={{ width: 140 }}>
                  <Select
                    placeholder="Select Client"
                    fields={["Sasnarine", "Bailey"]}
                  />
                </div>
                <img height={25} width={25} src="./clock.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default RightPart;
