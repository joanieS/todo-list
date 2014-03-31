class Task < ActiveRecord::Base
  STATUSES = {
    0 => "incomplete",
    1 => "completed"
  }

  belongs_to :list

  def status_text
    STATUSES[status]
  end

  def completed?
    status == 1
  end

  def incomplete?
    status == 0
  end


  def complete!
    update(:status => 1)
  end
end
