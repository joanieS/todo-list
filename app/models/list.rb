class List < ActiveRecord::Base
  has_many :tasks
  
  def add_task(task_hash)
    task_hash[:status] ||= 0
    tasks.build(task_hash)
  end
end
