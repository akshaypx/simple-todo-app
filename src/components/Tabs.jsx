export function Tabs(props) {
  const { todos, activeTab, setActiveTab } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tabs === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((todo) => todo.completed === false).length
            : todos.filter((todo) => todo.completed === true).length;
        return (
          <button
            className={
              "tab-button " + (activeTab === tab ? " tab-selected" : "")
            }
            key={tabIndex}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(tab);
            }}
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
